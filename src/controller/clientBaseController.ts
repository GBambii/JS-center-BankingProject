import {Request, Response} from "express";
import clientBase from "../entities/Banking/clientBase";

class clientBaseController{
    async getAllCourses(request: Request, response: Response){
        try {
            const clientBase = await clientBase.find();
            response.status(200).json({message:"Success", data:clientBase});
        } catch (error) {
            response.status(500).json({ message: 'Internal Server Error' });
        }
    }

    async getCourseById(request: Request, response: Response){
        const clientBaseId = request.params.id;
        try {
            const clientBase = await clientBase.findById(clientBaseId);
            if (clientBase) {
                response.status(200).json({message:"Success", data:clientBase});
            } else {
                response.status(404).json({ message: 'Course not found' });
            }
        } catch (error) {
            response.status(500).json({ message: 'Internal Server Error' });
        }
    }

   
}

export default new clientBaseController();