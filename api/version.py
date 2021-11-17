import json
import sys
from http.server import BaseHTTPRequestHandler

import jinja2


def get_python_version():
    v = sys.version_info

    return '{0}.{1}.{2}'.format(v.major, v.minor, v.micro)


class handler(BaseHTTPRequestHandler):

    def do_GET(self):
        res_body = json.dumps({
            'python_version': get_python_version(),
            'jinja_version': jinja2.__version__,
        })

        self.send_response(200)
        self.send_header('Content-type','application/json')
        self.end_headers()

        self.wfile.write(res_body.encode('utf-8'))

        return
