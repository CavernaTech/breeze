import MenuContainer from "../containers/menu.container";

function TerminalPage({ isAuthenticated }) {
  if (!isAuthenticated) {
    return (
      <p>aaa</p>
    );
  }
  return (
    <MenuContainer>
    </MenuContainer>
  );
}

TerminalPage.defaultProps = {
  isAuthenticated: false,
}

export default TerminalPage;
