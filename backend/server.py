import os
import openai
from flask import Flask, jsonify, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

openai.api_key = "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"


@app.route('/', methods=['GET'])
def home():
    return jsonify(message="Welcome to the API"), 200


@app.route('/mail', methods=['GET'])
def summary():
    mail = request.args.get('mail')
    size = request.args.get('size')
    tone = request.args.get('tone')  # Professional
    emotion = request.args.get('emotion')
    response = openai.Completion.create(
        model="text-davinci-001",
        prompt="Generate an" + size + "sized" + tone +
        "email with a" + emotion + "emotion with the below content: " + mail,
        temperature=0.7,
        max_tokens=1000,
        top_p=1,
        frequency_penalty=0,
        presence_penalty=0
    )
    print(response.choices[0].text)
    return response.choices[0].text, 200


if __name__ == '__main__':
    app.run(debug=True)

# openai.api_key = os.getenv("OPENAI_API_KEY")
