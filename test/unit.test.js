
class Dark{
    constructor(){
        this.css = "#1e1c2a";
    }
}

describe('background color',()=>{

    it("is the background dark?", () =>{
        const dark= new Dark();
        
        expect(dark).tobe(dark.css("#1e1c2a"))
    });

})