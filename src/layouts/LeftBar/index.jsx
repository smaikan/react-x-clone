import "../layout.css";

import Logo from "./logo";
import Menu from "./menu";
import Button from "./button";
import Account from "./account";
export default function Leftbar() {
  return (
    <leftbar className="leftbar">
        <Logo />
        
        <Menu />
      

      
        <Button />
      

      <Account />
    </leftbar>
  );
}
