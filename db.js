/**
 *
 * @type {oracledb}
 */
const db = require('oracle12db-win64')


const script = async () => {
   const pool = await db.createPool({
       user: 'BRAVO',
       password: 'b',
       connectString: 'ORCL'
   })

        const conn = await pool.getConnection()
        const results = await conn.execute('select * from tst')  /** 'select * from tst' */
        console.log(results.rows)
        await conn.close()
        await pool.terminate()


}

script()