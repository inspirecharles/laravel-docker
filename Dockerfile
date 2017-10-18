FROM nickgerman/yii2

COPY ./environments/vagrant/apache/apache.conf /etc/apache2/sites-available/seo-tool.lan.conf
RUN a2ensite seo-tool.lan.conf
RUN a2dissite 000-default.conf
RUN a2enmod env
RUN a2enmod headers
RUN a2enmod rewrite
RUN a2enmod headers
RUN update-rc.d -f  apache2 remove
ENTRYPOINT ["apache2ctl", "-D", "FOREGROUND"]
#CMD ["bash"]
