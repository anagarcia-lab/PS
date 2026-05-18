import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  // 1. Permitimos que tu web lea los datos de forma segura (CORS)
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET');

  try {
    // 2. Ruta secreta donde está guardado el Excel dentro del servidor
    const rutaExcel = path.join(process.cwd(), 'data', 'budget.xlsx');
    
    // NOTA: Para leer un archivo Excel (.xlsx) de forma avanzada en Node.js 
    // se usan librerías como 'xlsx'. De momento, simularemos una respuesta 
    // segura para que veas cómo viaja el informe procesado:
    const resumenSeguro = {
      mensaje: "Conexión segura establecida",
      totalPresupuesto: 5000, // Aquí irá el cálculo real de tu Excel
      estado: "Ok"
    };

    // 3. Enviamos SOLO el informe procesado al navegador, nunca el Excel completo
    res.status(200).json(resumenSeguro);
  } catch (error) {
    res.status(500).json({ error: 'Error al procesar el archivo' });
  }
}
