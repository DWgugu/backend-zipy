import { Request, Response } from "express";
import Database from "../database/connections/database";
const excel = require("excel4node");

export default class GenerateXLSX {
    public async show(request: Request, response: Response) {
        const { idCutDate, idUser } = request.params;
        const connection = await Database;

        try {
            const select = await connection.query(`
                select cd.id,
                c.client as cliente,
                u.users as usuario,
                sum(wd.quantity) as quantidade,
                sum(wd.piece_value * wd.quantity) as valor
                from .client_input ci
                inner join .cut_date cd on ci.cut_date_id = cd.id
                inner join .client c on ci.client_id = c.id
                inner join .users u on ci.user_id = u.id
                inner join .worked_date wd on wd.client_input_id = ci.id
                where cd.id = ${idCutDate} and u.id = ${idUser}
                group by cd.id, cliente, usuario
            `)


            console.log(select);
            return response.status(200).json(select)
            
        } catch (error) {
            console.log(error);
            
            return response.status(500).json({ message: "error" })
        }
    }

    public async index(request: Request, response: Response) {
        const { idCutDate, idUser } = request.params;
        const connection = await Database;

        try {
            const select = await connection.query(`
                select cd.id,
                c.client as cliente,
                u.users as usuario,
                sum(wd.quantity) as quantidade,
                sum(wd.piece_value * wd.quantity) as valor
                from .client_input ci
                inner join .cut_date cd on ci.cut_date_id = cd.id
                inner join .client c on ci.client_id = c.id
                inner join .users u on ci.user_id = u.id
                inner join .worked_date wd on wd.client_input_id = ci.id
                where cd.id = ${idCutDate} and u.id = ${idUser}
                group by cd.id, cliente, usuario
            `)

            // Código para gerar excel ZeroPaper
            var row = 1;
            var column = 0;

            var workbook = new excel.Workbook();   
            var worksheet = workbook.addWorksheet('ZeroPaper');

            var styleHeader = workbook.createStyle({
                font: {
                    size: 16,
                    bold: true
                },
                //numberFormat: '$#,##0.00; ($#,##0.00); -'
                numberFormat: 'General'
                });

            var style = workbook.createStyle({
                font: {
                    size: 12
                },
                numberFormat: "General"
                
                    // numberFormat: 'Geral'
                });

                var styleMoney = workbook.createStyle({
                    font: {
                        size: 12
                    },
                    numberFormat: 'R$#,##0.00; (R$#,##0.00); -'
                    });

                const headerExcelZeropaper = [
                    "Cliente",
                    "Quantidade",
                    "Valor",
                ]
                headerExcelZeropaper.forEach(element => {
                    worksheet.cell(row,column+=1).string(element).style(styleHeader);
                });

                for(const i in select) {
                    
                    row += 1;

                    worksheet.cell(row,1).string(select[i].cliente).style(style);
                    worksheet.cell(row,2).string(select[i].quantidade).style(style);
                    worksheet.cell(row,3).string(select[i].valor).style(styleMoney);
                }


                workbook.write(`Relatorio.xlsx`, response);
            
        } catch (error) {
            console.log(error);
            
            return response.status(500).json({ message: "error" })
        }
    }
}