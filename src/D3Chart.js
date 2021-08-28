import * as d3 from 'd3'
const data = [20,12,16,25,20];

const url = "https://udemy-react-d3.firebaseio.com/ages.json"
export default class D3Chart{
    constructor(element){
        const svg = d3.select(element).append('svg')
                        .attr('width', 500)
                        .attr('height', 500)

        d3.json(url).then(agesData => {
            console.log(agesData)
            svg.selectAll('rect')
            .data(agesData)
            .enter()
            .append('rect')
            .attr('x', (d,i) => {return (i+0.5) * 50})
            .attr('y', 50)
            .attr('width', 45)
            .attr('height', d => d.age)
            .attr('fill', 'grey')

        });

       
    }
}