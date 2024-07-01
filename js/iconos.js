﻿"use strict";
export const
FAVICON = 	"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABHNCSVQICAgIfAhkiAAAE0pJREFUeJy9m3mUZEWVh7+I917ulZVVmVVd3U0v9EZ3A90HWaZVUBAGRW0BEVl1FGdU3EaPM65nBs/IcEbPDMooCMoBkYMiI0LLMIIiR1YRu6VZWnqD3qu71twqM1++9yJi/silq7r2Be87efKdzBcR9/7ixr037o0neAPJGCP2PLHHfvJbT0XjsXjX4eeOWIvP6npH//ZCzO0pElQ9kBahZIj0mozQnv9S6bXc7gUbOivdicrgx678u6o4W+g3kkcx1x0ajPjtvY9Fd964a7G7u3CarrLBL1XXOFjHewS2jT1PYxwAiQQMCo1EGoXOCcSQhIEq3uvRDucF3Rp+av6a+X/54/XPDf5g/S1zDsacAXBob499+yW3ZdQh/bexuP3eWDF2RmXAnS+0CAdGYSGHDTj2sAbT/K7dGx1Nx/OtqeR2f7Dyu9ji9JOrPrjqz2d8/bSBueJ71gD0fPhz9r1/Xnc83bmr3ax/gRO2TnJdN+pYIVCg0YiZDCNAxiVCS2zHopQf0hZWMZKKPElC39p+1oKnr/7ZlUWBMLPhf8YAfHrH5+XqM9d1WjHvmvy+/IcEwQqDsaPJKHbcxs16KNefmfDUhE+ubKX0eplqoYJANDVDIHLVjPuE0xW/6eRPrHtm42ff7c1Ujhlxd9M/3Bzuei557uGXe7/o4p4JhIYL2mC2+ZsEpr16NTIeQpeCkX1RWyIajUIdal+Qunvdm5fffOb97z0ETFsbpg3ALzfeuXDf49mr/FL5Cwq6JHLyWZb172mD0JBndP9SgDYGD+XPD817vHVl5t+dRfZzFz7yPn86I8jJH6nR5fuvlI9+4FdnvP54/63VUuWbBtllYU1NxXX9I6c8XJ0E482RNiAtizCW0+v1nv/69u33du88cO32W3a2TWcEayoPGYw4sOngmfnN2R+WKqW3Wlj2jNa2mZW9GqM7g7QE0gihjG5xs+7be14+ELnkzVc8v2n3A9Wp9DElAJyFoVNK/YUfalefZGGJmRo2oKZzghms1rHJ1DVBCokxxinlK6eIfl+sWLzmD88P/DGYrP2kANwY+85Kct5NludssJGzEx5qgs8hAFDXBCmRxiCQTuCqdenB9uy7V2986ZH+X6uJ2k64KB+8+lfrlPJvQYtzbISww87chE51YygtOWehmFYaHInlOBhI+cb7ZnjI+uTL92yLTdRuXA24acP32gafOnKDV66+z0I2ORVGY+aIa+EIhBbNCHC2ZEyDM4PBRN1C6U2HHz3wYmJb22vbvvfKmIOMqQE7/nt3JNhauMYtVi+2sERDeK002gikPV1rPjZpT6PNHIb3RqCVQcqGd7I6vZJ/3dmXnn2CwYw5a6MkMVuNfOQnD230XPUViRUda81rrafhQP/6pJXGsmpO2qV6Wn6w74aH/u3hzFjPjloCx29p6erfWrxRaHmCNd4KMfWPZO6M2Zx7B4O0LISRQhf0Er3L35v+Y+fWrTdvHTHCiHl87Nu/t0p9katkYJ86rvBvFOlR7My+S6URUmBhRYsHh649//p3Ljn2mREj7vjuq/OKewc/IBHhKUd4MySBQCKxsQkTJkaMuI4QIYKNjZwjQ2t0bcJd3LWvPbz9/GNtQXOaP/PRz9qZHalPVkvVKy2sWU+/RmNJCywQWuDgECJElCgttJCkhQQtRImgpCHHIP1ikIRooU20Nv9rJE0MzNhb1MG2h0xl0QtnPfWb3+59Itv4z27cvCX7lq7+cs8VAhGaxSBIJBYShxCZ5Wl0AdyeMlpo8hTooZeD9Wsv++mmm4IpHO1IQoo2lrOUNXoNq+QqFqUXEhZhTNVQypXw8PAJUKhhyZPJ+INkNX6iPmhdZDDfaeQRmgAM/il7lqfdVbbjoP3xdFvUbZXEwsIZcdkYoCLKVGSF/OICB1KHeGHwBV7lVY7IXlxdGd1lIzJskIYcWbaYLFvEC5CCcCVCZ5BhbWQtp3Sup623nTZaiREjQOFRpYqHj49Go5tW+lgItF06MrTx7svvuYt7GWgC8OuHfxPd9eG/vNMv+1HbceoTIetr1MKuq6+Dg4VECU3FlMnKPD2mh4PyAHv0fo7IbrrVYYwGDgKHAO+oYCOEPhaEYYwKUVP3REuCSqlC1Xc5YA5yoHKQR9O/gRiEXIelYgknsprlrGKxPo4UKRzj4ONRxcPDIyCoQ2IQSGJDkRP7H+tfBsMAGPjW7vmWsDdY2BgfbGxC1FaCS4Uj9NJHHwc4wGGrm4N0M6AHjzKu60JojrqyYbtyIUYaNIMhk7H56hccViwXHOzWPPC/msce92v/1u1UpVRBKUUoFMJg8D2fmBejXC3jaZ+dYjc7ze5mvy0ywTKWs8qsYCnH00UnUaIoFH79shwnnQzHzvn4i5/Y8sP1t2lhjBE32N98n61C91gh4saDkizxfNtmdkR28Jr/OpTqMzlJqsG2bWKxGOVyGaXG34MYY0jEba76oMXCRYrBAVixPEJrK3zoYyXANEEzxmBZFo7joLUmCIJaIDYWWdT8WrR2n46mWBOsYW1+Lcury7GljYwKEu0tj55y0emXn/a9U3P2M9991pIh663SJaY8jUSS1ElOHziVZXIJXtglFy7SG++h2+7miNdLIRiCKuByVAskJFoS5LK5MWd9JAmGSgG33Tl8tzrEQ/cluGijxYMPBZhhuQPLsnDCDsV8sdEcwoAN4ZBDi9VCh0zTQZp2P0N7kCFejmIXHVCgjKKXXpYuXQZZxcCB/tXbtr16HJCze5/qz0hhneMbX9jYzXxbG21Y2qZQGaKzMo+TOBGNoWpXyUay9MX7ONzaTTeHOeL14lKlHHKb+T9zTPJjOCC1WzHqmbt/VuE97xQ8+FDtobDjYElJSypF1bjMszpZ6iyiRbeQDjpIV9uIDcWJBlFsbSMQqPrVWPuamib6+HQXuukI0kjkfG8oOBN4xbZEdb4o6wVyWEykpUYbRcLECfDJkseijIWFFdikh9J0DXVyMuvQIqDkVMjFBunTPRzKHKZfDtDvDSI8QbXi4St/lLDN2ZUWoVCIiivJD1msXW0DUboyPlppqkGVfDaPqyv8jTqNy/RllCgR1C9FgIvbNHTjuUSJoNRfpEqFdtodv7e6tvD9Wxz78Ks97QEmaQ33RRq0YxAaUiqFBvLkmtrh1027QBByQoQ8h/neAhaxmLcRZ7O1mXvtX5CKthJPx5HSRgqD0hrf9QiEIeyEAYVEolVAxfVQniKfN8AgR/pGC5Eli4tLjhx6mmFoLUox+Pj0MyDUfmvxS49cLO1kW+vSQbIhcTQkqGHgK2yntiRSKoUAcuSgVsbCYLBCFp7yaGQIBAIbm6zKgYJcNd/sz5aSWCQGlqBadSkGhdHGzI7QP3DULgxfNgZDjuK4mjQ1EAQWFh4e/frQvNLZLyRtT+j5IMZI9Qh8P8BxbASGVpWEYSA4IQcdaLQenh6p3WetfN3v13YUxhgCrSmUh8ZkzLZtgkDgWAGe11iKo41onhwBasbFlgZHNhZOxOkY2BKO2u6egh6+/o99OPADpFMLilpVEoNmKDyE8hVGm2OYERgkOfIjRBjPIzRzeVICHkhJKDT+NqSKj0IhEUyY6JuEBAJdVeb1LTuNLJcnS5yKWmgsQEhBO+0kgiS+9kcZnNp+wFCiOCkTxhhs2yYUCuF5NZsSVC1isYm2xIYAn/EmbKqKIRBoo3GrLhI1lbKawA8CZEQibENKJWmjre5m9LCnBBpNSZcm7K0x88OFBxjIGpKJiTkpyuK4ANiOnHK6TtT5lqFwZMq7qcANatGuJWillRSpetFH158R+MInP4EGNIS3LAvXddFaN5fI/gOaUGTiaawYFzlOsibwNDqY3DvU5LWJRRPI6ILEFPfZAqMNQRBgpEaKGghJkk1NkEgCAowcu7/hM6+UGiE8QP8AlMsTz2CJErPNVhkM0pYsWBFGJhe1lEGocZNxkhF5I9GwCbZACkEbrSRJNbWgQnXMTFFDeNu28TxvlPCN3ituQ7ix+ckyOGsAAGw7VFp5/gYlD24+sg2MO9Zw0pZHd3nHMOr7fh0ESTspkiQRQHEM9R8ufGMzM7ZnsHn/FYJMu1VvN/qJIqVZp8sMhiF3YN8d990+KBe/vasUwh4NgKhXW8ZRjJqL9NFOLQRtp50UbWMCMJnwDUEvu0QALtd+IsKxKeKGu82RR0ylJD8BaTSdyxcO3H71j5QsF/r3B+geMEer0Y3PpKZB1Iob9Ti8k05kIxlzTNuJZ94AFj+6WQMu/3aDYsyilYGiM7mLnYgMBolUdsx+WXxS+PK8Uy7tjxB5xmCQjjwq+DQzvrp+iqMsXIjXYgYhajs+rXWtbDXBFnnFMknLvAZqAeefN3IZNEJgGZGYGZ47qomlEVi9mfmtTwPIr533NU+2yWeBqqhb+pmRISCg2FoEWUtHS7sR5U3Qqj7c28+q76PLAlC869yj/Rpjaoa4BZwuhzLlGXKoCdkhUktbdrnHWbsB5J3vuF23ROznWlrjh42eednTYCAFK9UqVs9fTaQrTOAF6HgtijSmsVkdeTXWysnrVe1e1VRw7bph6acQkIA4LXTs62guueny59gOTjJkgor3TO6ObB7qOcHes7z90UfkZj/wl87UxUgh8YzHKcV1vC1zFn0r+thS3kIpVeRVdwcDQT9DlCmNM3uLl9VD8njta9lSAyzj9FgHKyJLOL5lCZGBOEG1lvCcbg3NYLAiFu6QV2xZ1va7b/T8q24C8OX7vli5ecH3n1QFdbGFtGZStNdGUyrUQuDSnhJWr8Vp6k3kuwusC9ZjYdXyM7KWqVHaINAEGA4TZuXA/0FlG0SqUAwR717M5/gIiyMxyoU8fsmnUM010x7TJQEYZWhNJl9bkohsa/zeTAIsPX/Bs4W7C4e1MsfNxM8KwAo7OK0Obk8ZU4WSKtFrerCwsamlrIQWTQNWO04HcQzbn8nQ23MSkYRPsT+CDkKAy5FcDmxNUJ35mcMGh27F1emFnQ//5wfv6WPzMQAsT5/0ys7UngfcgcqnmVGVUhC4HsIyRDuiVAtV4kGcDjrJMlhLSY+zvATw/D0rMeYEjNCoAOLtktTCBJWBCr7r1UsysyGDhoNtndFN2770YnM33ex19X+tqqqwuFViXptNDc4v+ZT7yqiqQqNJkCBNpr6HH9u3hvCpVh1cz8GthvFVmHyfpHi4h8D1me05GgMotArb8scL21a9OPy/EbC2/6B9Vyyd3KQwymBmqAdHr0YOMUaMNtkO0oyZyxMYLDQOAaH6x8GAVs0+Z0MGjYT9yZWd973n4XeNqG6MEPGaCz/ixxcn78A2OzUaOQcValOHoUW3kBEZjBgbhDeKDIYAFUTT0R+//6OX7Dr2/1FzfP4JF+zKnNx5u4GKUgYpZn9oQWPQKBI6QUb+dUFQKFKhls3rT11x18lfWjsq+zNKuuPu7QpOujhzVzhi/0SjlDJqTg5uaEyt1qATZOy/DggaTZjI3vTa9HW7b8seGOuZcZX8/jM2Lc1v7burxzvytrk8LiMRSGExJIfo1/0II8bP8c2CDAaFKmYyHf98f/+m219i65h51HFHvuT5C/etuHTZt8Kh0K5GyCojNrN8P2GYJsRpD82tJjQyzHUvVm3vbL1zyYXLfjqe8DDJUdmVL695LZEKbwsqaoPBpAlACjFDJ3mUGu1jxBBCUKF2cGLW1t4YtNEIqDqOvF0vDl33T49+MT9RmwkB+B2PmTWVdfs62tr3+m71HINOGGrV2tlUaKCeMjCaCFGklHMCQl2TlJWI3G8T+9J/HL5hcLI2ky7uZ3nGXHbuVXso0ecX1ZsVQRwzWfl7atSAMGIiSGt2INR2iNpPtrc8lFkT/vJ1e6/vnkq7KVm3B3c9oL/6+a//JYTsLu2rnBDgZwRCzA0INRgiRGqaYKYPgkYToIupruQdqy9a//Vrf/W5/VNtO2XzfueTd6i2hzOvnPDUmucr2aGE1nqlgZm9OHEMNUEwEaSQVGSlnqGbuO+apddG2uxKL0lfv37j6Tdeftul/dMZe0bc33bej9pLL+Y/NtRX/JSNtcTCnv17BNQPZklJThbIBYM0jt4dS40Q2yDK81Ndj847Kf3toafV8//IZ6btTmbMtXnMhG644BunCN/6ikCcA6J1zBeoLJhOJbNxOi1HjkEGmycP4ai71BDYyF0tHcmbj2+N/PSa3f+SY4anjGc1bcYYsWnjQ8mDLx08MxhyP14dLG8wiEwtJVrzy8KWaC+Y1lANELJkKYoi0UwUqQAtK7qidkXSsfvaVoR/fsGlV+5Z+dmlsykUz4He1ukXn/plas/PX12NKy7zS955oWhomV/RUcuyhVaqXsyY2nCmfs5AYlFudVW2ku1Lh5IvtM5vuS/S2f7Yrc/cengLf5qV4A2a85ene/6+3960Y1NXPGqf3vNc3zmq4L8pwF9ssNMa36ofxRXDl8uwJGcgEYGGIdB9jhPebpzgiWKH9/Tat6zZeeXPrhhiTt82egMAGE6//vKjoUrBTWb/cKAjmkyu7N7S7yw6a/4HivsLmVJficDTWFIQSoRJLEuaoOT9fmhf4aX02vk5FQ72L0guGDj3f95RFmKW8fcE9P8ilShg2scupgAAAABJRU5ErkJggg==",
HOME =		"/img/home.svg";