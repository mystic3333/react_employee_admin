
const files = require.context(".", true, /\.jsx$/);
// console.log('files',files.keys())
const components = [];
files.keys().map((item, index) => {
    if (item === "./index.jsx") {
        return false;
    }

    let obj = {}
    const pathArr = item.split("/");
    const path = pathArr
        .slice(1, pathArr.length - 1)
        .join("/")
        .toLowerCase();
    const retPath = `/home/${path}`;


    const component = files(item).default
    obj.component = component
    obj.path = retPath
    components.push(obj)
});

export default components