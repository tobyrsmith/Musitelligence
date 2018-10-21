class Sequence{
    constructor(measures)
    {
        this._measures = measures
    }
    get measures(){
        return this._measures
    }
    set measures(measures){
        this._measures = measures
    }
    getData(){
        const data = new Array()
        for(const i of this._measures)
            for(const j of i.data)
                data.push(j)
        return data
    }
    length(){
        return this._measures.length;
    }
}
export default Sequence