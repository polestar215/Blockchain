import React, { useEffect, useState } from "react";
import { ethers } from "ethers";
import { contractABI, contractAddress } from "../contract";
import Link from "next/link";

export const FeedbackContext = React.createContext();
const iface = new ethers.utils.Interface([
  "function createFeed(uint256 _rate, string calldata _message, string calldata _user)",
  "function createResponse(uint _index, string calldata _message)",
]);

export const FeedbackProvider = ({ children }) => {
  const [isOwnerConnected, setIsOwnerConnected] = useState(false);
  const [ownerStatus, setOwnerStatus] = useState("");
  const [txStatus, setTxStatus] = useState("");
  const [feeds, setFeeds] = useState([]);
  const [isLoadingFeeds, setIsLoadingFeeds] = useState(false);
  const [formData, setFormData] = useState({
    rate: 1,
    message: "",
    user: "",
  });
  const [hoverRating, setHoverRating] = useState(0);

  const getEthereumContract = () => {
    const provider = new ethers.providers.InfuraProvider(
      process.env.ETHEREUM_NETWORK,
      process.env.INFURA_PROVIDER_ID,
      process.env.INFURA_PROVIDER_SECRET,
    );
    const signer = new ethers.Wallet(
      process.env.ACCOUNT_INTERACTION_PRIVATE_KEY,
      provider,
    );
    const feedback_instance = new ethers.Contract(
      contractAddress,
      contractABI,
      signer,
    );
    return feedback_instance;
  };

  const getEthereumContractOwner = () => {
    const provider = new ethers.providers.InfuraProvider(
      process.env.ETHEREUM_NETWORK,
      process.env.INFURA_PROVIDER_ID,
      process.env.INFURA_PROVIDER_SECRET,
    );
    const signer = new ethers.Wallet(
      process.env.CONTRACT_OWNER_PRIVATE_KEY,
      provider,
    );
    const feedback_instance = new ethers.Contract(
      contractAddress,
      contractABI,
      signer,
    );
    return feedback_instance;
  };

  const handleChange = (e, name) => {
    setFormData((prevState) => ({
      ...prevState,
      [name]: e.target.value,
    }));
  };

  const connectWallet = async () => {
    try {
      if (!window.ethereum) {
        return {
          isOwnerConnected: false,
          ownerStatus: (
            <span>
              <p>
                {" "}
                🦊{" "}
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={`https://metamask.io/download.html`}
                >
                  You must install Metamask, a virtual Ethereum wallet, in your
                  browser.
                </a>
              </p>
            </span>
          ),
        };
      }

      const addressArray = await window.ethereum.request({
        method: "eth_requestAccounts",
      });

      if (addressArray.length > 0) {
        if (
          addressArray[0].toString().toUpperCase() ===
          process.env.CONTRACT_OWNER.toUpperCase()
        ) {
          return {
            isOwnerConnected: true,
            ownerStatus: "You can reply to the feedback",
          };
        } else {
          return {
            isOwnerConnected: false,
            ownerStatus:
              "You cannot reply to the feedback. You are not the owner",
          };
        }
      } else {
        return {
          isOwnerConnected: false,
          ownerStatus: "🦊 Connect to Metamask using the top right button.",
        };
      }
    } catch (error) {
      return {
        isOwnerConnected: "",
        ownerStatus: "😥 " + error.message,
      };
    }
  };

  const getCurrentWalletConnected = async () => {
    try {
      if (!window.ethereum) {
        return {
          isOwnerConnected: false,
          ownerStatus: (
            <span>
              <p>
                {" "}
                🦊{" "}
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={`https://metamask.io/download.html`}
                >
                  You must install Metamask, a virtual Ethereum wallet, in your
                  browser.
                </a>
              </p>
            </span>
          ),
        };
      }

      const addressArray = await window.ethereum.request({
        method: "eth_accounts",
      });

      if (addressArray.length > 0) {
        if (
          addressArray[0].toString().toUpperCase() ===
          process.env.CONTRACT_OWNER.toUpperCase()
        ) {
          return {
            isOwnerConnected: true,
            ownerStatus: "You can reply to the feedback",
          };
        } else {
          return {
            isOwnerConnected: false,
            ownerStatus:
              "You cannot reply to the feedback. You are not the owner",
          };
        }
      } else {
        return {
          isOwnerConnected: false,
          ownerStatus: "🦊 Connect to Metamask using the top right button.",
        };
      }
    } catch (error) {
      return {
        isOwnerConnected: "",
        ownerStatus: "😥 " + error.message,
      };
    }
  };

  const addWalletConnectionListener = () => {
    if (window.ethereum) {
      window.ethereum.on("accountsChanged", (accounts) => {
        if (accounts.length > 0) {
          if (
            accounts[0].toString().toUpperCase() ===
            process.env.CONTRACT_OWNER.toUpperCase()
          ) {
            setIsOwnerConnected(true);
            setOwnerStatus("👆🏽 You can reply to the feedback.");
          } else {
            setIsOwnerConnected(false);
            setOwnerStatus(
              "You cannot reply to the feedback. You are not the owner",
            );
          }
        } else {
          setIsOwnerConnected(false);
          setOwnerStatus("🦊 Connect to Metamask using the top right button.");
        }
      });
    } else {
      setIsOwnerConnected(false);
      setOwnerStatus(
        <span>
          <p>
            {" "}
            🦊{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={`https://metamask.io/download.html`}
            >
              You must install Metamask, a virtual Ethereum wallet, in your
              browser.
            </a>
          </p>
        </span>,
      );
    }
  };

  const getAllFeedback = async () => {
    try {
      const instance = getEthereumContract();
      const feeds = await instance.getAllFeeds();
      const structuredFeeds = feeds.map((feed) => ({
        user: feed.user,
        message: feed.message,
        rate: Number(feed.rate),
        id: Number(feed.id),
        createdAt: new Date(feed.createdAt.toNumber() * 1000).toLocaleString(),
        response: {
          message: feed.response.message,
          createdAt: new Date(
            feed.response.createdAt.toNumber() * 1000,
          ).toLocaleString(),
        },
      }));

      return {
        feeds: structuredFeeds,
      };
    } catch (error) {
      return {
        feeds: [],
        status: "😥 " + error.message,
      };
    }
  };

  const createFeed = async () => {
    const { rate, message, user } = formData;
    if (rate > 5 || rate < 0) {
      setTxStatus("❌ Your rate must be between 0 and 5.");
      return;
    }
    if (message === "" || message.length < 10) {
      setTxStatus("❌ Your message must be filled with 10 characters minimum.");
      return;
    }

    if (user === "" || user.length < 5) {
      setTxStatus("❌ You must provide a username with 5 characters minimum.");
      return;
    }
    try {
      const instance = getEthereumContract();

      const gasLimit = await instance.estimateGas.createFeed(
        rate,
        message,
        user,
      );
      const gasPrice = await instance.provider.getGasPrice();
      /*const currentBlock = await instance.provider.getBlock("latest");
      const feeData = await instance.provider.getFeeData();
      const baseFee = Number(currentBlock.baseFeePerGas);
      const maxPriorityFeePerGas = feeData.maxPriorityFeePerGas;
      const maxFeePerGas = baseFee + Number(feeData.maxPriorityFeePerGas) - 1; EIP 1559*/

      const nonce = await instance.provider.getTransactionCount(
        process.env.ACCOUNT_INTERACTION_PUBLIC_KEY,
        "latest",
      );
      const chainId = (await instance.provider.getNetwork()).chainId;
      const tx = {
        gasLimit: gasLimit._hex,
        gasPrice: gasPrice._hex,
        /*maxFeePerGas: maxFeePerGas,
        maxPriorityFeePerGas: maxPriorityFeePerGas, EIP 1559*/
        from: process.env.ACCOUNT_INTERACTION_PUBLIC_KEY,
        to: contractAddress,
        nonce: nonce,
        chainId: chainId,
        data: iface.encodeFunctionData("createFeed", [rate, message, user]),
      };

      const signedTx = await instance.signer.signTransaction(tx);
      const sendSignTx = await instance.provider.sendTransaction(signedTx);

      setTxStatus(
        <span>
          ✅{" "}
          <Link
            href={`https://ropsten.etherscan.io/tx/${sendSignTx.hash}`}
            passHref
          >
            <a target="_blank" rel="noreferrer noopener">
              View the status of your feedback on Etherscan!
            </a>
          </Link>
          <br />
          ℹ️ Once the transaction is verified by the network, the feedback will
          be updated automatically.
        </span>,
      );
      setFormData({
        rate: 1,
        message: "",
        user: "",
      });
    } catch (error) {
      setTxStatus("😥 " + error.message);
      setFormData({
        rate: 1,
        message: "",
        user: "",
      });
    }
  };

  const createReply = async (id, reply) => {
    if (window.ethereum && isOwnerConnected) {
      if (reply === "" || reply.length < 10) {
        setOwnerStatus(
          "❌ Your reply must be filled with 10 characters minimum.",
        );
        return;
      }

      try {
        const instance = getEthereumContractOwner();
        const gasPrice = await instance.provider.getGasPrice();
        const gasLimit = await instance.estimateGas.createResponse(id, reply, {
          from: process.env.CONTRACT_OWNER,
        });

        const nonce = await instance.provider.getTransactionCount(
          process.env.CONTRACT_OWNER,
          "latest",
        );
        const chainId = (await instance.provider.getNetwork()).chainId;

        const tx = {
          gasLimit: gasLimit._hex,
          gasPrice: gasPrice._hex,
          from: process.env.CONTRACT_OWNER,
          to: contractAddress,
          nonce: nonce,
          chainId: chainId,
          data: iface.encodeFunctionData("createResponse", [id, reply]),
        };
        const signedTx = await instance.signer.signTransaction(tx);
        const sendSignTx = await instance.provider.sendTransaction(signedTx);
        setOwnerStatus(
          <span>
            ✅{" "}
            <Link
              href={`https://ropsten.etherscan.io/tx/${sendSignTx.hash}`}
              passHref
            >
              <a target="_blank" rel="noreferrer noopener">
                View the status of your feedback on Etherscan!
              </a>
            </Link>
            <br />
            ℹ️ Once the transaction is verified by the network, the feedback
            will be updated automatically.
          </span>,
        );
      } catch (error) {
        setOwnerStatus("😥 " + error.message);
      }
    } else {
      setOwnerStatus(
        "🦊 Connect to Metamask using the top right button or be the owner",
      );
    }
  };

  const feedListener = async () => {
    // event OnNewFeed(uint indexed createdAt, uint256 indexed _rate, string _user, string _message,);
    const instance = getEthereumContract();
    const feedCount = await instance.getFeedsCount();
    instance.on("OnNewFeed", (createdAt, _rate, _user, _message) => {
      const structuredFeed = {
        user: _user,
        message: _message,
        rate: Number(_rate),
        id: Number(feedCount),
        createdAt: new Date(createdAt.toNumber() * 1000).toLocaleString(),
        response: {
          createdAt: new Date(createdAt.toNumber() * 1000).toLocaleString(),
          message: "",
        },
      };
      setFeeds((prevState) => [...prevState, structuredFeed]);
      setTxStatus(
        <span>
          🎉 Your feedback has been added to the blockchain for the eternity.{" "}
        </span>,
      );
    });
  };

  const replyListener = async () => {
    // event OnNewFeed(uint indexed createdAt, uint256 indexed _rate, string _user, string _message,);
    const instance = getEthereumContract();
    instance.on("OnNewResponse", async (createdAt, index) => {
      const feed = await instance.getFeed(Number(index));
      const structuredFeed = {
        user: feed.user,
        message: feed.message,
        rate: Number(feed.rate),
        id: Number(feed.id),
        createdAt: new Date(feed.createdAt.toNumber() * 1000).toLocaleString(),
        response: {
          message: feed.response.message,
          createdAt: new Date(
            feed.response.createdAt.toNumber() * 1000,
          ).toLocaleString(),
        },
      };

      setFeeds((prevState) => {
        let newData = prevState;
        let findFeed = newData.find((f) => Number(f.id) === Number(index));
        Object.assign(findFeed, structuredFeed);
        return [...newData];
      });
      setOwnerStatus(
        <span>
          🎉 Your reply has been added to the blockchain for the eternity.{" "}
        </span>,
      );
    });
  };

  useEffect(() => {
    async function fetchFeeds() {
      setIsLoadingFeeds(true);
      const { feeds, status } = await getAllFeedback();
      setFeeds(feeds);
      if (status) setTxStatus(status);
      setIsLoadingFeeds(false);
    }

    feedListener();
    replyListener();
    fetchFeeds();
  }, []);

  useEffect(() => {
    async function fetchWallet() {
      const { isOwnerConnected, ownerStatus } =
        await getCurrentWalletConnected();

      setIsOwnerConnected(isOwnerConnected);
      setOwnerStatus(ownerStatus);
    }
    fetchWallet();
    addWalletConnectionListener();
  }, [isOwnerConnected]);

  return (
    <FeedbackContext.Provider
      value={{
        isLoadingFeeds,
        feeds,
        createFeed,
        txStatus,
        handleChange,
        formData,
        setFormData,
        hoverRating,
        setHoverRating,
        isOwnerConnected,
        ownerStatus,
        createReply,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};
