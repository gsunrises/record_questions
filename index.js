const obj = {}
class Ele {
    constructor(ele) {
        this.ele = ele;
        this.funum = 1;
    }
    //获取当前节点的元素深度
    getEleDepth() {
        let fuele = this.ele.parentNode;
        if (fuele !== document) {
            this.funum++;
            this.ele = fuele;
            return this.getEleDepth();
        } else {
            return this.funum;
        }
    }
    //获取当前节点的子元素个数
    getEleSubNum() {
        let zieles = this.ele.childNodes, zinum = 0;
        for (let i = 0; i < zieles.length; i++) {
            if (zieles[i].nodeName !== '#text') {
                zinum++;
            }
        }
        return zinum;
    }
}

// 获取全部dom节点
const totalElements = document.getElementsByTagName("*");
console.log(totalElements);
obj.totalElementsCount = totalElements.length;//dom中的所有节点数量

let eleDepthArr = [];
let eleSubArr = [];
for (let i = 0; i < totalElements.length; i++) {
    eleDepthArr.push(new Ele(totalElements[i]).getEleDepth())
    eleSubArr.push(new Ele(totalElements[i]).getEleSubNum())
}
eleDepthArr = eleDepthArr.sort((a, b) => (b - a))
eleSubArr = eleSubArr.sort((a, b) => (b - a))
obj.maxDOMTreeDepth = eleDepthArr[0]//元素节点的最大嵌套深度
obj.maxChildrenCount = eleSubArr[0]//最大子元素个数

console.log(obj)