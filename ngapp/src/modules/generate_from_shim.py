from typing import List
from sys import argv, stdout, stdin


FOUR_SPACES: str = ' '*4
INDENT: str = FOUR_SPACES


# read input / setup
shim: str = ''
for line in stdin:
    shim += line

shimlines: List[str] = shim.split('\n')
top: str = shimlines[0]
middle: List[str] = shimlines[1:-2]


# generate the output
output: str = f'{top}\n'

# fields
for line in middle:
    output += f'{line}\n'.replace(INDENT, f'{INDENT}private _')

# constructor
output += f'\n{INDENT}constructor(\n'

i = 0
for line in middle:
    i += 1
    output += f'{INDENT}{line}\n'.replace(';', '' if i == len(middle) else ',')

output += f'{INDENT}) {{\n'

for line in middle:
    _var = line.replace(INDENT, '').split(': ')[0]
    output += f'{INDENT}{INDENT}this._{_var} = {_var};\n'

output += f'{INDENT}}}\n'

# getters and setters
for line in middle:
    _split = line.replace(INDENT, '').split(': ')
    _var = _split[0]
    _type = _split[1].replace(';', '')

    output += f'\n{INDENT}get {_var}(): {_type} {{\n'
    output += f'{INDENT}{INDENT}return this._{_var};\n'
    output += f'{INDENT}}}\n'

    output += f'\n{INDENT}set {_var}({_var}: {_type}) {{\n'
    output += f'{INDENT}{INDENT}this._{_var} = {_var};\n'
    output += f'{INDENT}}}\n'


output += '}\n'

stdout.write(output)
