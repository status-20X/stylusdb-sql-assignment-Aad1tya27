// src/queryParser.js

// src/queryParser.js

function parseQuery(query) {
    const selectRegex = /SELECT (.+?) FROM (.+?)(?: WHERE (.*))?$/i;
    const match = query.match(selectRegex);

    if (match) {
        const [, fields, table, whereClause] = match;
        // if (whereClause) {


            return {
                fields: fields.split(',').map(field => field.trim()),
                table: table.trim(),
                whereClause:( whereClause?  whereClause.trim() : null)
            };
        // } else {
        //     return {
        //         fields: fields.split(',').map(field => field.trim()),
        //         table: table.trim(),
        //     };
        // }
    } else {
        throw new Error('Invalid query format');
    }
}

module.exports = parseQuery;