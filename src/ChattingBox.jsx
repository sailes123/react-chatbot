import ChatBot from "react-simple-chatbot";

const steps = [
        {
                id: '1',
                message: 'What is your name?',
                trigger: 'name',
            },
            {
                id: 'name',
                user: true,
                trigger: '3',
            },
            {
                id: '3',
                message: 'Hi {previousValue}! What is your gender?',
                trigger: 'gender',
            },
            {
                id: 'gender',
                options: [
                    { value: 'male', label: 'Male', trigger: '5' },
                    { value: 'female', label: 'Female', trigger: '5' },
                ],
            },
            {
                id: '5',
                message: 'How old are you?',
                trigger: 'age',
            },
            {
                id: 'age',
                user: true,
                trigger: '7',
                validator: (value) => {
                    if (isNaN(value)) {
                        return 'value must be a number';
                    } else if (value < 0) {
                        return 'value must be positive';
                    } else if (value > 120) {
                        return `${value}? Come on!`;
                    }

                    return true;
                },
            },
        {
          id: "7",
          message: "Nice! You are {previousValue} years old.",
          trigger: "end",
        },
        {
          id: "end",
          message: "Bye!",
          end: true,
        },
      ];

const ChattingBox = () => {
  return (
    <div className="chatbox">
      <ChatBot steps={steps}  />
    </div>
  );
};

export default ChattingBox;
