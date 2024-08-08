import fs from 'fs';
import path from 'path';
import { Request, Response } from 'express';

export class ImageController {
  constructor() {}

  getImages = (req: Request, res: Response) => {
    const { type = '', img = '' } = req.params;

    const imagePath = path.resolve(__dirname, `../../../uploads/${type}/${img}`);

    if (!fs.existsSync(imagePath)) {
      return res.status(404).send('Image not found');
    }
    res.sendFile(imagePath);
  };
}
