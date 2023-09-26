const express=require("express");
const router=express.Router();
const dataController=require("../Controllers/Users_database_controller");
const contactController=require("../Controllers/contact_controller");
const plansController=require("../Controllers/plans_controller");
const profileController=require("../Controllers/userProfile_controller");
const allocatedWorkouts=require("../Controllers/allocated_workout_controller");

// Users routes

router.get("/allUsersData",dataController.getAllData);
router.get("/trainerData",dataController.getTrainersData);
router.get("/userData",dataController.getUsersData);
router.post("/register",dataController.createRecord);
router.post("/userLogin",dataController.checkUser)
router.post("/trainerLogin",dataController.checkTrainer)
router.delete("/deleteUser/:id",dataController.deleteRecord);
router.put("/updateUser/:id",dataController.updateRecord);
router.patch("/updateUserName/:id",dataController.updateName);


// Workout Plans routes 

router.post("/create-plan",plansController.createPlan)
router.get("/get-plan",plansController.getPlan)
router.get("/get-user-workout-plan",plansController.getParticularPlan);
router.put("/update-plan/:id",plansController.updatePlan)
router.delete("/delete-plan/:id",plansController.deletePlan)

// Profile routes

router.post("/create-profile",profileController.createProfile);
router.get("/profilesData",profileController.getProfiles);
router.put("/update-profile/:id",profileController.updateProfile);

// Allocation routes

router.post("/allocate-workout",allocatedWorkouts.createRecord);
router.get("/workout-record",allocatedWorkouts.sendRecord);
router.get("/all-workout-record",allocatedWorkouts.sendAllRecord);
router.delete("/delete-workout-record/:id",allocatedWorkouts.deleteRecord);
router.patch("/update-status/:id",allocatedWorkouts.UpdateStatus);


// Contact routes

router.post("/contact-record",contactController.recordContactDetail);
router.get("/get-contact-record",contactController.getContactDetail);
router.delete("/delete-contact-record/:id",contactController.deleteContactDetail);



module.exports=router;