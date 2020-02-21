/**
  Common
  EZDB Common Settings & Values
 */

const AWSOptions = {
  regions: [
    'us-east-1',
    'us-east-2',
    'us-west-1',
    'us-west-2'
  ],
  versions: [
    '2011-12-05',
    '2012-08-10'
  ]
};

const AttributeTypes = [
  {
    name: 'String',
    label: 'S',
    type: 'String'
  },
  {
    name: 'Number',
    label: 'N',
    type: 'Number'
  },
  {
    name: 'Binary',
    label: 'B',
    type: 'Buffer, Typed Array, Blob, String'
  },
  {
    name: 'String Set',
    label: 'SS',
    type: 'Array<String>'
  },
  {
    name: 'Number Set',
    label: 'NS',
    type: 'Array<Number>'
  },
  {
    name: 'Binary Set',
    label: 'BS',
    type: 'Array<Buffer, Typed Array, Blob, String>'
  },
  {
    name: 'Map',
    label: 'M',
    type: 'Map<Map>'
  },
  {
    name: 'Map Set',
    label: 'L',
    type: 'Array<Map>'
  },
  {
    name: 'Null',
    label: 'NULL',
    type: 'Boolean'
  },
  {
    name: 'Boolean',
    label: 'BOOL',
    type: 'Boolean'
  }
];

module.exports {
  AWSOptions: AWSOptions,
  AttributeTypes: AttributeTypes
};
