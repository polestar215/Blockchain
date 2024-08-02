import React from "react";

const HoCNavLink = (
  WrappedComponent,
  ListItemComponent,
  LinkComponent,
  navLinks,
  navType,
  setShowSide,
  activeLink,
) => {
  const handleAsideClosing = () => {
    setShowSide((prevState) => !prevState);
  };

  return (
    <WrappedComponent>
      {navLinks &&
        navLinks.map(({ id, url, name, element }) => (
          <ListItemComponent key={id}>
            <LinkComponent href={url} passHref={true}>
              {navType === "AsideNav" ? (
                <a onClick={handleAsideClosing} aria-label={name}>
                  {name}
                </a>
              ) : (
                <a
                  className={`${activeLink === element ? "active" : ""}`}
                  aria-label={name}
                >
                  {name}
                </a>
              )}
            </LinkComponent>
          </ListItemComponent>
        ))}
    </WrappedComponent>
  );
};

export default HoCNavLink;
