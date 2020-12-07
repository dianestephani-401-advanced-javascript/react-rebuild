import React, { useContext } from 'react';
import Toast from 'react-bootstrap/Toast';
import Badge from 'react-bootstrap/Badge';
import {PaginatedList} from 'react-paginated-list';
//npm i react-paginated-list and npm i styled-components? Not sure about this ask joe
import {If, Else, Then} from 'react-if';
import {SettingsContext} from '../../context/settings/settings-context.js'

function List(props){
//We have item list in props!!!!!! Dummy!
   const settings = useContext(SettingsContext);
  console.log('settings line 12', settings);
  return(
    <PaginatedList
      list = {props.itemList}
      itemsPerPage = {settings.page}
      renderList = {list => (
        <>
        {list.map((item) => (
          <Toast key={item._id} onClose={ () => props.makeDelete(item._id)}>
            <Toast.Header>
              
              <If condition={!item.complete}>

              <Then>
                <Badge pill variant="danger" onClick={ () => props.makePut(item,item._id)}>
                  Pending
                </Badge>{' '}
              </Then>

              <Else>
                <Badge pill variant="success" onClick={ () => props.makePut(item,item._id)}>
                  Complete
                </Badge>{' '}
              </Else>

              </If>

              <strong className="mr-auto">{item.assignee}</strong>
              <small>Difficulty: {item.difficulty}</small>
            </Toast.Header>
            <Toast.Body>{item.text}</Toast.Body>
          </Toast>

        ))}
        </>
      )}
    />
  )
}

export default List;