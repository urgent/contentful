import fetch from 'node-fetch';

const body = {
    "query": "query{bountyCollection{items{id, title}}}"
}

const response = await fetch('https://graphql.contentful.com/content/v1/spaces/ge2h41wcr1qd', {
    method: 'post',
    body: JSON.stringify(body),
    headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer DXgCHvMuSZokRWL6Ht6UVkBfA7HSkHDE1OPaVB5qd8g'
    }
});

const json = await response.json();

console.log(json.data.bountyCollection.items);