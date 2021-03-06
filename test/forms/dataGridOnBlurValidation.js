export default {
  '_id': '5ed62e449173583f4c5e9962',
  'type': 'form',
  'tags': [

  ],
  'owner': '5e05a6b7549cdc2ece30c6b0',
  'components': [
    {
      'label': 'Data Grid',
      'reorder': false,
      'addAnotherPosition': 'bottom',
      'defaultOpen': false,
      'layoutFixed': false,
      'enableRowGroups': false,
      'tableView': false,
      'defaultValue': [
        {

        }
      ],
      'key': 'dataGrid',
      'type': 'datagrid',
      'input': true,
      'components': [
        {
          'label': 'Text Field',
          'tableView': true,
          'validateOn': 'blur',
          'validate': {
            'minLength': 5
          },
          'key': 'textField',
          'type': 'textfield',
          'input': true
        }
      ]
    },
    {
      'type': 'button',
      'label': 'Submit',
      'key': 'submit',
      'disableOnInvalid': true,
      'input': true,
      'tableView': false
    }
  ],
  'controller': '',
  'revisions': '',
  '_vid': 0,
  'title': 'ValidateOnBlur',
  'display': 'form',
  'access': [
    {
      'roles': [
        '5e96e79ee1c3ad3178454100',
        '5e96e79ee1c3ad3178454101',
        '5e96e79ee1c3ad3178454102'
      ],
      'type': 'read_all'
    }
  ],
  'submissionAccess': [

  ],
  'settings': {

  },
  'properties': {

  },
  'name': 'validateOnBlur',
  'path': 'validateonblur'
};
