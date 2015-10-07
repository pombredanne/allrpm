FROM fedora:22

RUN dnf install -y git which python-dnf-plugins-extras-repograph npm\
 && git clone https://github.com/shaded-enmity/allrpm

CMD ["bash"]
