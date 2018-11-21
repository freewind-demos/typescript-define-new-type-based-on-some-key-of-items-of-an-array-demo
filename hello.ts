//const fieldTypes0 = [
//  { id: 1, name: 'text'},
//  { id: 2, name: 'list'},
//  // ...
//  { id: 10, name: 'switch'}
//];

function fields<TId extends number, TName extends string, T extends {id: TId, name: TName}[]>(...o: T): T {
  return o;
}

const fieldTypes = fields(
    {id: 1, name: 'text'},
    {id: 2, name: 'list'},
    {id: 10, name: 'switch'}
);

type IdToNamesType = {
  [P in typeof fieldTypes[number]['id']]: Extract<typeof fieldTypes[number], {id: P}>['name']
}


function check(idToNames: IdToNamesType) {
  const text = idToNames['1'];
  console.log(text === 'text');
  console.log(text === 'text2');  // compilation error
}

