import Tab from "../tab/Tab";
import Messages from "./messages";
import Posts from "./posts";
import FollowingPostItem from "./posts/FollowingPostItem";

import PostsItem from "./posts/PostsItem";
import Setpost from "./setpost";

export default function Home() {
  return (
    <div>
      
      <Tab ActiveTab="foryou">
        <Tab.Items>
          <Tab.Item id="foryou">Sana özel</Tab.Item>
            
          <Tab.Item id="takip">Takip edilenler</Tab.Item>
        </Tab.Items>
        <Tab.Content id="foryou">
        <Setpost/>
        <Posts data={PostsItem} />
        </Tab.Content>

        <Tab.Content id="takip">
        <Setpost/>
       <Posts data={FollowingPostItem} />
        </Tab.Content>
      </Tab>
      
      
    </div>
  );
}
