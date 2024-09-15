from endpoint1 import endpoint_one
from endpoint2 import endpoint_two
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

@app.route('/api/search/', methods=['GET'])
@cross_origin()
def search():
    return endpoint_one(request.args.get('query'))

# GET api/video?url=url
@app.route('/api/video/', methods=['GET'])
@cross_origin()
def video():
    return endpoint_two(request.args.get('url'))

@app.route('/api/audio/', methods=['POST'])
@cross_origin()
def audio():
    return convertVoiceToTextAndInterpretCommand(request)

if __name__ == '__main__':
    app.run(host="10.36.135.93", debug=True, port=8080)
