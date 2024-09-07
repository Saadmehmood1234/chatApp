// import Conversation from "../models/conversationModel.js";
// import Message from "../models/messageModel.js";
// import { getReceiverSocketId } from "../socket/socket.js";

// export const sendMessage = async (req, res) => {
//   try {
//     const { message } = req.body;
//     const { id: receiverId } = req.params;
//     const senderId = req.user._id;
//     console.log(senderId);
//     let conversation = await Conversation.findOne({
//       participants: { $all: [senderId, receiverId] },
//     });
//     if (!conversation) {
//       conversation = await Conversation.create({
//         participants: [senderId, receiverId],
//         messages: [],
//       });
//     }

//     const newMessage = await Message.create({
//       senderId,
//       receiverId,
//       message,
//     });

//     if (newMessage) {
//       conversation.messages.push(newMessage._id);
//     }

//     await Promise.all([conversation.save(), newMessage.save()]);

//     const receiverSocketId = getReceiverSocketId(receiverId);
//     if (receiverSocketId) {
//       io.to(receiverSocketId).emit("newMessage", newMessage);
//     }

//     res.status(201).json(newMessage);
//   } catch (error) {
//     console.log("Error in sendMessage Controller", error.message);
//     res.status(500).json({ error: "Internal server error" });
//   }
// };
import Conversation from "../models/conversationModel.js";
import Message from "../models/messageModel.js";
import { getReceiverSocketId, io } from "../socket/socket.js"; // Import io

export const sendMessage = async (req, res) => {
  try {
    const { message } = req.body;
    const { id: receiverId } = req.params;
    const senderId = req.user._id; // Assuming req.user._id holds the sender's ID
    console.log(senderId);

    // Find or create conversation
    let conversation = await Conversation.findOne({
      participants: { $all: [senderId, receiverId] },
    });
    
    if (!conversation) {
      conversation = await Conversation.create({
        participants: [senderId, receiverId],
        messages: [],
      });
    }

    // Create new message
    const newMessage = await Message.create({
      senderId,
      receiverId,
      message,
    });

    // Add message to the conversation
    if (newMessage) {
      conversation.messages.push(newMessage._id);
    }

    await Promise.all([conversation.save(), newMessage.save()]);

    // Get the receiver's socket ID
    const receiverSocketId = getReceiverSocketId(receiverId);
    
    // Emit the message to the receiver if they are online
    if (receiverSocketId) {
      io.to(receiverSocketId).emit("newMessage", newMessage);
    }

    // Send back the created message
    res.status(201).json(newMessage);
  } catch (error) {
    console.log("Error in sendMessage Controller", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const getMessages = async (req, res) => {
  try {
    const { id: userToChatId } = req.params;
    const senderId = req.user._id;

    const conversation = await Conversation.findOne({
      participants: { $all: [senderId, userToChatId] },
    }).populate("messages"); 

    if (!conversation) return res.status(200).json([]);

    const messages = conversation.messages;

    res.status(200).json(messages);
  } catch (error) {
    console.log("Error in getMessages controller: ", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};
