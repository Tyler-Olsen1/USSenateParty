state = {
    getSenators: []
}

let getSenators = async {
    await Fetch('https://raw.githubusercontent.com/CivilServiceUSA/us-senate/master/us-senate/data/us-senate.json')
    .then(response => response.json())
    .then(response.json() => this.setState({ getSenators: [] }))
console.log(getSenators)

async componentWillMount() {
    await this.getSenators()
    }

let demSenator = getSenators.filter(Senator) {
    return getSenators.party === "democrat"})    
        .then(data => {
        this.setState({Senators: party})
        })

console.log(demSenator)

async componentWillMount () {
    await this.demSenator()
    }


{<div>
    {this.state.senators.map(senator => {
        return (
            <li>{name}</li>
            <li>{party}</li>
            <li>{state_code}</li>
</div>
        )
    })