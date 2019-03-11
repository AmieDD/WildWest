import React from 'react';
import { connect } from 'react-redux';

const Home = props => (
  <div>
    <h1>Welcome to the Wild West Programming Game!</h1>
        <p>Rules: fix 1 bug, and then break 1 new thing and check it in, for the next person. Next person, just repeat the previous steps. :</p>
    <ul>
      <li><a href='https://get.asp.net/'>ASP.NET Core</a> and <a href='https://msdn.microsoft.com/en-us/library/67ef8sbd.aspx'>C#</a> for cross-platform server-side code</li>
            <li><a href='https://github.com/AmieDD/WildWest'>WildWest Github</a></li>
            <li><a href='https://github.com/AmieDD/WildWest/pulls'>Fix a bug</a></li>
    </ul>
    <p>To help you get started, we've also set up: Nothing</p>
    <ul>
      <li><strong>Stagecoach- navigation</strong>. For example, click <em>Pointless Counter</em> then <em>Back</em> to return here.</li>
      <li><strong>Development jail house integration</strong>. Forever in development mode, the development server from <code>create-react-app</code> runs in the background automatically, so your client-side resources are dynamically built on demand and the page refreshes when you modify any file.</li>
      <li><strong>Efficient production builds</strong>. In production mode, development-time features are disabled(I think), and your <code>dotnet publish</code> configuration produces minified, efficiently bundled JavaScript files.</li>
    </ul>
  </div>
);

export default connect()(Home);
