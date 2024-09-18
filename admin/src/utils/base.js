const base = {
    get() {
        return {
            url : "http://localhost:8080/phpz26523pf/",
            name: "phpz26523pf",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/phpz26523pf/front/dist/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "基于php的小说阅读系统"
        } 
    }
}
export default base
