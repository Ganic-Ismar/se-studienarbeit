# Software Engineering Studienarbeit

Hier eine kleine Anleitung / Guide zu der Studienarbeit der Gruppe Ganic, bestehend aus den Teammitgliedern Julian Liegel, Florian Herrnberger und Ismar Ganic.

Das Projekt kann mittels git geklont werden.

`git clone https://gitlab.lrz.de/software-engineering-gruppe-test/gruppe-ganic/gruppe-ganic.git`

## Anforderung 1

Die Dateien zu den Anforderungen 1.1 - 1.3 befinden sich im Ordner "Abgabe_Juni" im Stammverzeichnis.

## Anforderung 2

Die Dateien zu der Anforderung 2 (Datenbankschema) befindet sich im Ordner "Abgabe_Juli" -> "Anforderung_2".

## Anforderung 3

Die Dateien zu der Anforderung 2 (Datenbankschema) befindet sich im Ordner "Abgabe_Juli" -> "Anforderung_3".

## Anforderung 4

Es wurde ein Kundenregistrierungsprozess mit einem Spring-Boot-Backend gecoded. Die Verwendung einer MySQL-Datenbank ist für dieses Projekt vorgesehen, da im Backend bereits der richtige Treiber hierfür hinterlegt worden ist.

### Anforderung 4.2

Wir haben uns für dieses Projekt für ein React-Frontend entschieden. Dieses Frontend kann über docker-compose mit dem Backend und der Datenbank gestartet werden, dazu aber mehr bei Anforderung 5.

Falls man das Projekt über docker-compose (empfohlen) startet, ist das Frontend über http://localhost:8081 erreichbar.

## Anforderung 5

### Anforderung 5.1

In unserem GitLab-Repository ist bereits eine Jar-Datei enthalten aus der ein Docker-Image erzeugt werden kann. Das Dockerfile dazu befindet sich im Stammverzeichnis.

~~~bash
docker build -t spring_studienarbeit .

docker run -p 8080:8080 spring_studienarbeit
~~~

Beachten Sie, dass eine MySQL-Datenbank (Port 3307) im Hintergrund ausgeführt werden muss, damit die Spring-Boot-Applikation startet.

### Anforderung 5.2 + 5.3

Der einfachste Weg um das Projekt zum Laufen zu bekommen ist mittels docker-compose. Dazu einfach folgendes im Stammverzeichnis ausführen:

`docker-compose up`

Das Erzeugen der Images kann tatsächlich eine ganze Zeit lang dauern (je nachdem wie schnell der Rechner ist 2 - 4 Minuten...). Bitte einfach paar Minuten abwarten bis dieser Vorgang fertig ist. Anschließend startet die Spring-Boot-Applikation paar mal neu, da die SQL-Datenbank noch nicht fertig eingerichtet ist, bitte auch hier warten bis alle Dienste durch-gestartet sind. Anschließend können Sie unter http://localhost:8081 das React-Frontend aufrufen und Eingaben tätigen.