import express from "express";
import authorController from "../controller/author.controller";
import multer from "multer";

const router = express.Router()

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "../frontend/public/images");
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + file.originalname)
    }
})
const upload = multer({ storage: storage })


router.route("/api/authors").post(upload.single("img"), authorController.createAuthor).get(authorController.listAuthors)
router.route("/api/authors/:authorsId").get(authorController.authorInformation).put(upload.single("img"), authorController.updateAuthor).delete(authorController.deleteAuthor)
router.route("/api/authors/find/:filter").get(authorController.searchedAuthors)






export default router;