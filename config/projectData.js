const projects = [
  {
    title: "Spotify Player",
    type: "Front-End Project",
    description:
      "Spotify clone player. Connect to Spotify first, play a music and interact with this clone application to choose one of your best music and see what the Spotify API can do",
    image: "/projects/spotify.png",
    tags: [
      { name: "NextJS", id: "0_0" },
      { name: "Spotify API", id: "0_1" },
      { name: "NextAuth", id: "0_2" },
      { name: "Tailwind", id: "0_3" },
    ],
    source: "https://github.com/Mousticke/clone-next-spotify",
    visit: "",
    id: 0,
  },
  {
    title: "Multi Signature Wallet",
    type: "Ethereum Project",
    description:
      "Smart contract deployed in Ropsten (Ethereum test net) along with a front end to sign and validate transaction inside a wallet owned by a predefined number of owner",
    image: "/projects/solidity.png",
    tags: [
      { name: "Ethereum", id: "1_0" },
      { name: "Infura", id: "1_1" },
      { name: "Smart Contract", id: "1_2" },
      { name: "Solidity", id: "1_3" },
      { name: "Web3", id: "1_4" },
      { name: "React", id: "1_5" },
      { name: "Truffle", id: "1_6" },
      { name: "Ganache", id: "1_7" },
      { name: "Mocha", id: "1_8" },
    ],
    source: "https://github.com/Mousticke/multi-signature-wallet",
    visit: "",
    id: 1,
  },
  {
    title: "Metaverse Chat",
    type: "Dapp Project",
    description:
      "Develop a decentralized chat application powered with Moralis. Go to a next level of chat with the Metaverse",
    image: "/projects/metaverse.png",
    tags: [
      { name: "Ethereum", id: "2_0" },
      { name: "Moralis", id: "2_1" },
      { name: "Metaverse", id: "2_2" },
      { name: "NextJS", id: "2_3" },
      { name: "Web3", id: "2_4" },
      { name: "Tailwind", id: "2_5" },
    ],
    source: "https://github.com/Mousticke/multi-signature-wallet",
    visit: "https://metaverse-chat-teal.vercel.app/",
    id: 2,
  },
  {
    title: "Crypto Sender",
    type: "Ethereum Project",
    description:
      "Web application interacting with a solidity smart contract (check the repo crypto-sender-smartcontract) to send Ether between two accounts.",
    image: "/projects/cryptoSender.png",
    tags: [
      { name: "Ethereum", id: "3_0" },
      { name: "NextJS", id: "3_1" },
      { name: "EthersJS", id: "3_2" },
      { name: "Web3", id: "3_3" },
      { name: "Hardhat", id: "3_4" },
      { name: "Smart contract", id: "3_5" },
    ],
    source: "https://github.com/Mousticke/crypto-sender-client",
    visit: "http://crypto-sender-client.vercel.app/",
    id: 3,
  },
  {
    title: "Decentralized Feedback",
    type: "Ethereum PoC",
    description:
      "Smart contract deployed in Ropsten (Ethereum test net) along with a front end to give feedback of anything with a rating score.",
    image: "/projects/solidity.png",
    tags: [
      { name: "Ethereum", id: "9_0" },
      { name: "Infura", id: "9_1" },
      { name: "Smart Contract", id: "9_2" },
      { name: "Solidity", id: "9_3" },
      { name: "EtherJS", id: "9_4" },
      { name: "NextJS", id: "9_5" },
      { name: "Hardhat", id: "9_6" },
      { name: "Ganache", id: "9_7" },
      { name: "Mocha", id: "9_8" },
    ],
    source: "https://github.com/Mousticke/d-feedback",
    visit: "",
    id: 9,
  },
  {
    title: "Idea App",
    type: "Back-End Project",
    description:
      "Design a Restfull API for an application to post some ideas to develop and receive some advice to achieve the goal",
    image: "/projects/backendNodejs.png",
    tags: [
      { name: "NodeJS", id: "10_0" },
      { name: "Express", id: "10_1" },
      { name: "MongoDB", id: "10_2" },
      { name: "Mocha", id: "10_3" },
    ],
    source: "https://github.com/Mousticke/IdeaAppBackEnd",
    visit: "",
    id: 10,
  },
];

export default projects;
