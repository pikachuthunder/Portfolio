from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

from chatproject.ai import ChatbotAssistant
from chatproject.ai import get_stocks
# Initialize the chatbot once

assisstant=ChatbotAssistant('intents.json', function_mappings={'stocks':get_stocks})
assisstant.parse_intents()
assisstant.prepare_data()
assisstant.train_model(batch_size=8, lr=0.001,epochs=100)
assisstant.save_model('chatbot_model.pth','dimensions.json')

chatbot=ChatbotAssistant('intents.json', function_mappings={'stocks': get_stocks})
chatbot.parse_intents()
chatbot.load_model('chatbot_model.pth', 'dimensions.json')

class ChatbotAPIView(APIView):
    def post(self, request):
        message = request.data.get('message', '')

        if not message:
            return Response({"error": "Message is required"}, status=status.HTTP_400_BAD_REQUEST)

        response = chatbot.process_message(message)
        if response:
            return Response({"response": response})
        else:
            return Response({"response": "Sorry, I didn't understand that."})
