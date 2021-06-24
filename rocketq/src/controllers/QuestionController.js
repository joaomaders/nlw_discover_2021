module.exports = {
   index(req, res) {
      const roomId = req.params.roomId;
      const questionId = req.params.questionId;
      const action = req.params.action;
      const password = req.body.password;

      // console.log(roomId);
      // console.log(questionId);
      // console.log(action);
      // console.log(password);
   }
}