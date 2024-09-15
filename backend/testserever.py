'''
make a simple flask backend with a http post request /ramsey
'''

from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route('/ramsey', methods=['POST'])
def ramsey():
    data = request.get_json()
    print(data)
    # return 200
    return jsonify({'status': 'ok'})

# get
@app.route('/', methods=['GET'])
def mainpage():
    return jsonify({'status': 'ok'})

if __name__ == '__main__':
    app.run(host="10.37.116.66", debug=True, port=8080)