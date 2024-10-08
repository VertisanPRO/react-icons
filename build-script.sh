#!/bin/bash -eux

time (cd packages/react-icons/ && yarn fetch)
time (cd packages/react-icons/ && yarn build)
time (cd packages/react-icons/ && yarn diff)
(cd packages/_react-icons/ && npm pack |& tail)
(cd packages/_react-icons-pack/ && npm pack |& tail)

(cd packages/preview/ && yarn build)
