import { Router, Request, Response } from "express";
import { board1data, board2data, board3data, board4data, fastData} from "./data"

const router = Router()

// gameshow front page
router.get("/", async(req: Request, res: Response) => {
    return res.status(200).sendFile("index.html", {root: "./public/gameboard/"})
})
router.get('/gameboard/:file', async (req: Request, res: Response) => {
    const fileName = req.params.file
    return res.status(200).sendFile(fileName, {root: "./public/gameboard/"})
})

// gameshow host panel
router.get("/host", async(req: Request, res: Response) => {
    return res.status(200).sendFile("index.html", {root: "./public/host/"})
})
router.get('/host/:file', async (req: Request, res: Response) => {
    const fileName = req.params.file
    return res.status(200).sendFile(fileName, {root: "./public/host/"})
})

// controller panel
router.get("/controller", async(req: Request, res: Response) => {
    return res.status(200).sendFile("index.html", {root: "./public/controller/"})
})
router.get('/controller/:file', async (req: Request, res: Response) => {
    const fileName = req.params.file
    return res.status(200).sendFile(fileName, {root: "./public/controller/"})
})

// jeopardy board 1 data
router.get('/board1', async (req: Request, res: Response) => {
    return res.status(200).json(board1data)
})

// jeopardy board 2 data
router.get('/board2', async (req: Request, res: Response) => {
    return res.status(200).json(board2data)
})
// jeopardy board 1 data
router.get('/board3', async (req: Request, res: Response) => {
    return res.status(200).json(board3data)
})

// jeopardy board 2 data
router.get('/board4', async (req: Request, res: Response) => {
    return res.status(200).json(board4data)
})

// final jeopardy data
router.get('/final', async (req: Request, res: Response) => {
    return res.status(200).json(fastData)
})

// image api
router.get('/img/:imageName', async (req: Request, res: Response) => {
    const imageName = req.params.imageName
    return res.status(200).sendFile(imageName, {root: "./img/"})
})

export default router