from flask import Flask, request, jsonify, send_from_directory
from flask import render_template
import serial

# app = Flask(__name__
app = Flask(__name__, static_url_path='')


@app.route('/')
def root():
    return app.send_static_file('dist/index.html')
    # return app.send_static_file('index.html')




@app.route('/booze')
def make_booze():
    msg = ''
    res = request.args.get('drink',0, type=int)
    if res == 666:
        return "test"
        # return app.send_static_file('dist/index.html')
    if res == 0:
        return


    try:
        ser = serial.Serial('/dev/ttyAMA0', 9600, timeout=1)
        ser.open()

        ser.write(str(res))
        response = ser.readline()
        print response
        ser.close()
    except Exception as e:
        print "somthing went wrong {}".format(e)
    return "success"


@app.route('/_add_numbers')
def add_numbers():
    a = request.args.get('a', 0, type=int)
    b = request.args.get('b', 0, type=int)
    return jsonify(result=a + b)

if __name__ == '__main__':
    app.run(host='0.0.0.0', debug=True)

