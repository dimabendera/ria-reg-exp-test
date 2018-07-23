const   Domria_url_parser = require('./domriaRegExp'),
        url_examples = require('./urlExamples');

const domria_url_parser = new Domria_url_parser();
for(item of url_examples){
        console.log(`${domria_url_parser.parse(item)!==null}  ${item}`);
}