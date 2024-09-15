from part_c import convertVoiceToTextAndInterpretCommand

from flask import Flask, request, jsonify
from flask_cors import CORS, cross_origin

app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

@app.route('/', methods=['POST'])
@cross_origin()
def index():
    print("HELLO")
    print(request.get_data())
    return jsonify({'status': 'ok'})

@app.route('/api/audio/', methods=['POST'])
@cross_origin()
def audio():
    return convertVoiceToTextAndInterpretCommand()


if __name__ == '__main__':
    app.run(host="10.37.116.66", debug=True, port=8080)