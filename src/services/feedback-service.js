const FEEDBACK_URL= "http://localhost:5000/api/feedback";

const getFeedbackByTrainerId = (TrainerId) =>
    fetch(`${FEEDBACK_URL}/${TrainerId}`)
        .then(response => response.json())

const postFeedbackToUser = (feedback,trainerId) => {
    fetch(`${FEEDBACK_URL}/${trainerId}`, {
        method: "POST",
        body: JSON.stringify(feedback),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())
}

const getFeedbackForUser = (userId) =>{
    return fetch(`${FEEDBACK_URL}/users/${userId}`)
        .then(response => response.json())

}
const deleteFeedback = (trainerId,fid) => {
    // console.log(trainerId, fid)
    fetch(`${FEEDBACK_URL}/${trainerId}/${fid}`,
        {method: "DELETE"}).then(response => response.json())
}

const FeedbackService = {
    getFeedbackByTrainerId,
    postFeedbackToUser,
    deleteFeedback,
    getFeedbackForUser
}

export default FeedbackService;
