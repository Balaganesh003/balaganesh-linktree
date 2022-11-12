import createSchema from 'part:@sanity/base/schema-creator'

import schemaTypes from 'all:part:@sanity/base/schema-type'
import profile from './profile'
import links from './links'

export default createSchema({
    name: 'default',
    types: schemaTypes.concat([profile, links]),
})
