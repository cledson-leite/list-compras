// import { ConvexClient } from "convex/browser"
// import Constants from 'expo-constants'
// export const convexClient = new ConvexClient(Constants.expoConfig?.extra?.EXPO_PUBLIC_CONVEX_URL!)

import * as SQLite from 'expo-sqlite'; // Importe diretamente de 'expo-sqlite'

let dbInstance: SQLite.SQLiteDatabase | null = null;

export const openDB = async () => {
  if(dbInstance) return dbInstance
  try {
    // Usa openDatabaseSync, que é síncrona e retorna a instância do banco de dados.
    let db = SQLite.openDatabaseSync('shopping.db');
    console.log('Banco de dados "shopping.db" aberto com sucesso usando openDatabaseSync.');

    // Executa os comandos SQL individualmente usando runAsync.
    // Esta é a abordagem mais compatível se execAsyncBatch e transaction não estiverem disponíveis.
    db.runSync(
      `CREATE TABLE IF NOT EXISTS pendings (
        id TEXT PRIMARY KEY NOT NULL,
        nome TEXT NOT NULL,
        categoria TEXT,
        unidade TEXT,
        quantidade INTEGER
      );`
    );
    console.log('Tabela "pendings" criada ou verificada com sucesso.');

    db.runSync(
      `CREATE TABLE IF NOT EXISTS confirmed (
        id TEXT PRIMARY KEY NOT NULL,
        nome TEXT NOT NULL,
        categoria TEXT,
        unidade TEXT,
        quantidade INTEGER,
        price REAL
      );`
    );
    console.log('Tabela "confirmed" criada ou verificada com sucesso.');

    dbInstance = db
    return dbInstance;
  } catch (error) {
    console.error('Erro ao abrir ou configurar o banco de dados:', error);
    // Rejeita a Promise em caso de erro, permitindo que o erro seja capturado por quem chamar openDB
    dbInstance = null
    throw error;
  }
};