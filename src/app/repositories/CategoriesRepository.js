const db = require('../../database');

class CategoriesRepository {
  async findAll() {
    const rows = await db.query('SELECT * FROM categories ORDER BY name');

    return rows;
  }

  async create({ name }) {
    const [row] = await db.query(`
      INSERT INTO categories(name)
      VALUES($1)
      RETURNING *
    `, [name]);

    return row;
  }

  async teste() {
    const [row] = await db.query(`
        SELECT
        id_caixa_pdv,
        dt_abertura::text,
        tx_login_operador,
        vr_abertura,
        tx_obs_abertura,
        dt_fechamento,
        tx_obs_fechamento,
        vr_fechamento,
        tx_situacao,
        tx_nome_terminal
      FROM (
        SELECT
            id_caixa_pdv,
            dt_abertura::text,
            tx_login_operador,
            vr_abertura,
            tx_obs_abertura,
            dt_fechamento,
            tx_obs_fechamento,
            vr_fechamento,
            tx_situacao,
            tx_nome_terminal
        FROM sc_md.tb_fat_caixa_pdv
        WHERE id_empresa=353 AND dt_abertura BETWEEN '2020-01-01' AND '2021-12-30'
        ORDER BY dt_abertura DESC, tx_login_operador
      )sub
    `, []);

    return row;
  }
}

module.exports = new CategoriesRepository();
