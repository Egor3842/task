import UsersReducer, { AddDataInfo } from "./UsersReducer";

it('add post', () => {
    let state={SmallUsers:[
        { id: 1, firstName: 'BBBBB', lastName: 'AAAA',email:'gfhfgh@fgfg.fg',phone:'32332' },
        { id: 2, firstName: 'CCCCC', lastName: 'BBBB',email:'gfhfgh@fgfg.fg',phone:'32332' },
        { id: 3, firstName: 'DDDDD', lastName: 'CCCC',email:'gfhfgh@fgfg.fg',phone:'32332' },
        { id: 4, firstName: 'EEEEE', lastName: 'DDDD',email:'gfhfgh@fgfg.fg',phone:'32332' },
    ]}
    let action=AddDataInfo({ id:4,
        firstName:'ghfgh',
        lastName:'fdhgfh',
        email:'rhgfh@jghj.rhgf',
        phone:'324234'},true);
    

    let newState=UsersReducer(state,action)
    expect (newState.SmallUsers.length).toBe(5)
  });