require("./app.less");
const React = require("react");
const ReactDom = require("react-dom");
const Redux = require("redux");
const UserInfo = require("./routor/userInfo.jsx");
const userInfoCss = require("./routor/userInfo.css");
let Test = React.createClass({
    getDefaultProps: () => {
        console.log(this);
    },
    getInitialState: () => {
        let state = {
            value: 0
        }
        return state;
    },
    render: () => {
        return (
            <div>
                <UserInfo />
                <div>3</div>
                <div>2</div>
                <input defaultValue='0' />
                <div>单项数据绑定<span>{this.state.name}</span></div>
            </div>
        )
    },

});
fetch("../../index.html").then((response) => {
    return response.text();
}).then((body) => {
    let name = "1";
    let div = document.getElementById("container");
    ReactDom.render(<Test name={name} />, div);
}).catch((e) => {
    console.log('parsing failed', e);
});