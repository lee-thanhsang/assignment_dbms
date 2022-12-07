const couchbase = require('couchbase');

const CB_URL='localhost'
const CB_USER='Administrator'
const CB_PASS='lethanhsang'
const CB_BUCKET='website_dbms'


if (!CB_USER) {
  throw new Error(
      'Please define the CB_USER environment variable inside dev.env'
  )
}

if (!CB_PASS) {
  throw new Error(
      'Please define the CB_PASS environment variable inside dev.env'
  )
}

if (!CB_URL) {
  throw new Error(
      'Please define the CB_URL environment variable inside dev.env'
  )
}

if (!CB_BUCKET) {
  throw new Error(
      'Please define the CB_BUCKET environment variable inside dev.env'
  )
}

/**
 * Global is used here to maintain a cached connection across hot reloads
 * in development. This prevents connections growing exponentially
 * during API Route usage.
 */
let cached = global.couchbase

if (!cached) {
  cached = global.couchbase = { conn: null }
}

async function createCouchbaseCluster() {
  if (cached.conn) {
    return cached.conn
  }

  cached.conn = await couchbase.connect('couchbase://' + CB_URL, {
    username: CB_USER,
    password: CB_PASS,
  })
  // }

  return cached.conn
}

const connection = async function connectToDatabase() {
  const cluster = await createCouchbaseCluster()
  const bucket = cluster.bucket(CB_BUCKET);
  const collection = bucket.defaultCollection();
  const profileCollection = bucket.collection('employee');

  let dbConnection = {
    cluster,
    bucket,
    // collection,
    // profileCollection,
  }

  return dbConnection;
}

module.exports = connection;
