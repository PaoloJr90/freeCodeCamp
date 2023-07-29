--
-- PostgreSQL database dump
--

-- Dumped from database version 12.9 (Ubuntu 12.9-2.pgdg20.04+1)
-- Dumped by pg_dump version 12.9 (Ubuntu 12.9-2.pgdg20.04+1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

DROP DATABASE universe;
--
-- Name: universe; Type: DATABASE; Schema: -; Owner: postgres
--

CREATE DATABASE universe WITH TEMPLATE = template0 ENCODING = 'UTF8' LC_COLLATE = 'C.UTF-8' LC_CTYPE = 'C.UTF-8';


ALTER DATABASE universe OWNER TO postgres;

\connect universe

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: black_hole; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.black_hole (
    distance_from_earth numeric(7,0),
    is_existential_threat boolean,
    name character varying(30) NOT NULL,
    black_hole_id integer NOT NULL,
    galaxy_id integer NOT NULL
);


ALTER TABLE public.black_hole OWNER TO postgres;

--
-- Name: black_hole_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.black_hole_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.black_hole_id_seq OWNER TO postgres;

--
-- Name: black_hole_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.black_hole_id_seq OWNED BY public.black_hole.black_hole_id;


--
-- Name: galaxy; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.galaxy (
    galaxy_id integer NOT NULL,
    name character varying(30) NOT NULL,
    description text,
    is_spherical boolean,
    age_in_millions_of_years integer
);


ALTER TABLE public.galaxy OWNER TO postgres;

--
-- Name: galaxy_galaxy_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.galaxy_galaxy_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.galaxy_galaxy_id_seq OWNER TO postgres;

--
-- Name: galaxy_galaxy_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.galaxy_galaxy_id_seq OWNED BY public.galaxy.galaxy_id;


--
-- Name: moon; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.moon (
    name character varying(30) NOT NULL,
    description text,
    distance_from_earth integer,
    has_life boolean,
    moon_id integer NOT NULL,
    planet_id integer NOT NULL
);


ALTER TABLE public.moon OWNER TO postgres;

--
-- Name: moon_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.moon_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.moon_id_seq OWNER TO postgres;

--
-- Name: moon_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.moon_id_seq OWNED BY public.moon.moon_id;


--
-- Name: planet; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.planet (
    name character varying(30) NOT NULL,
    description text,
    has_life boolean,
    age_in_millions_of_years integer,
    planet_id integer NOT NULL,
    star_id integer NOT NULL
);


ALTER TABLE public.planet OWNER TO postgres;

--
-- Name: planet_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.planet_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.planet_id_seq OWNER TO postgres;

--
-- Name: planet_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.planet_id_seq OWNED BY public.planet.planet_id;


--
-- Name: star; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.star (
    name character varying(30) NOT NULL,
    description text,
    age_in_millions_of_years integer,
    size integer,
    star_id integer NOT NULL,
    galaxy_id integer NOT NULL
);


ALTER TABLE public.star OWNER TO postgres;

--
-- Name: star_star_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.star_star_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.star_star_id_seq OWNER TO postgres;

--
-- Name: star_star_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.star_star_id_seq OWNED BY public.star.star_id;


--
-- Name: black_hole black_hole_id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.black_hole ALTER COLUMN black_hole_id SET DEFAULT nextval('public.black_hole_id_seq'::regclass);


--
-- Name: galaxy galaxy_id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.galaxy ALTER COLUMN galaxy_id SET DEFAULT nextval('public.galaxy_galaxy_id_seq'::regclass);


--
-- Name: moon moon_id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.moon ALTER COLUMN moon_id SET DEFAULT nextval('public.moon_id_seq'::regclass);


--
-- Name: planet planet_id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.planet ALTER COLUMN planet_id SET DEFAULT nextval('public.planet_id_seq'::regclass);


--
-- Name: star star_id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.star ALTER COLUMN star_id SET DEFAULT nextval('public.star_star_id_seq'::regclass);


--
-- Data for Name: black_hole; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.black_hole VALUES (4536563, false, 'Super', 5, 2);
INSERT INTO public.black_hole VALUES (24, true, 'New', 6, 3);
INSERT INTO public.black_hole VALUES (890, false, 'Other', 7, 5);
INSERT INTO public.black_hole VALUES (98, false, 'V', 8, 7);


--
-- Data for Name: galaxy; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.galaxy VALUES (1, 'Black Eye', 'some text', false, 100);
INSERT INTO public.galaxy VALUES (2, 'Milkey Way', 'some text', false, 1000);
INSERT INTO public.galaxy VALUES (3, 'Fireworks', 'some text', false, 200);
INSERT INTO public.galaxy VALUES (4, 'Andromeda', 'some text', true, 1);
INSERT INTO public.galaxy VALUES (5, 'Pinwheel', 'some text', true, 345);
INSERT INTO public.galaxy VALUES (6, 'Sombrero', 'some text', true, 1234);
INSERT INTO public.galaxy VALUES (7, 'Sculptor', 'some text', false, NULL);


--
-- Data for Name: moon; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.moon VALUES ('Metis', 'dbefe', 2134, true, 1, 1);
INSERT INTO public.moon VALUES ('Callisto', 'frefe', 411, false, 2, 2);
INSERT INTO public.moon VALUES ('Europa', 'frefe', 654, false, 3, 3);
INSERT INTO public.moon VALUES ('Elara', 'some text', 211, true, 4, 4);
INSERT INTO public.moon VALUES ('Pandia', 'some', 876, true, 5, 5);
INSERT INTO public.moon VALUES ('Himalia', 'new', 111, false, 6, 6);
INSERT INTO public.moon VALUES ('Themisto', 'qqq', 345, false, 7, 7);
INSERT INTO public.moon VALUES ('Ganymede', 'euu', 890, true, 8, 8);
INSERT INTO public.moon VALUES ('Io', 'poii', 999, true, 9, 9);
INSERT INTO public.moon VALUES ('Thebe', 'yuuu', 444, false, 10, 10);
INSERT INTO public.moon VALUES ('Dia', 'wqqq', 888, true, 11, 11);
INSERT INTO public.moon VALUES ('Thyone', 'nfrfr', 555, false, 12, 12);
INSERT INTO public.moon VALUES ('Iocaste', 'fefw', 444, false, 13, 13);
INSERT INTO public.moon VALUES ('Metjyujuyis', 'dbefe', 2134, true, 15, 1);
INSERT INTO public.moon VALUES ('Callgtrgrtristo', 'frefe', 411, false, 16, 2);
INSERT INTO public.moon VALUES ('Eurogtrgrpa', 'frefe', 654, false, 17, 3);
INSERT INTO public.moon VALUES ('Elfsssara', 'some text', 211, true, 18, 4);
INSERT INTO public.moon VALUES ('Pandgtgria', 'some', 876, true, 19, 5);
INSERT INTO public.moon VALUES ('Himrtgrkealia', 'new', 111, false, 20, 6);
INSERT INTO public.moon VALUES ('Themifgteehsto', 'qqq', 345, false, 21, 7);
INSERT INTO public.moon VALUES ('Ganyfwwmede', 'euu', 890, true, 22, 8);
INSERT INTO public.moon VALUES ('Ipoloaao', 'poii', 999, true, 23, 9);
INSERT INTO public.moon VALUES ('Thgrtgrebe', 'yuuu', 444, false, 24, 10);
INSERT INTO public.moon VALUES ('Digrtgra', 'wqqq', 888, true, 25, 11);
INSERT INTO public.moon VALUES ('gtrgrThyone', 'nfrfr', 555, false, 26, 12);
INSERT INTO public.moon VALUES ('Iofewcaste', 'fefw', 444, false, 27, 15);


--
-- Data for Name: planet; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.planet VALUES ('Mercury', 'some text', true, 1234, 1, 8);
INSERT INTO public.planet VALUES ('Venus', 'some text', false, 432, 2, 8);
INSERT INTO public.planet VALUES ('Earth', 'home', true, 9764, 3, 15);
INSERT INTO public.planet VALUES ('Mars', 'some text', true, 144, 4, 10);
INSERT INTO public.planet VALUES ('Jupiter', 'some text', false, 7436, 5, 14);
INSERT INTO public.planet VALUES ('Saturn', 'some text', false, 543, 6, 13);
INSERT INTO public.planet VALUES ('Uranus', 'some text', false, 432, 7, 12);
INSERT INTO public.planet VALUES ('Neptune', 'some text', true, 322, 8, 13);
INSERT INTO public.planet VALUES ('Pluto', 'some more', false, 3423, 9, 9);
INSERT INTO public.planet VALUES ('Theia', 'new', false, 341, 10, 12);
INSERT INTO public.planet VALUES ('Haumea', 'rfbeifbe', false, 986, 11, 14);
INSERT INTO public.planet VALUES ('Makemake', 'trouble', false, 6875, 12, 13);
INSERT INTO public.planet VALUES ('Eris', 'new', false, 3412, 13, 13);
INSERT INTO public.planet VALUES ('Ceres', 'other', true, 131, 14, 12);
INSERT INTO public.planet VALUES ('Planet Nine', 'very new', true, 54656, 15, 15);


--
-- Data for Name: star; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.star VALUES ('Canis Major', 'some text', 1234, 40, 8, 2);
INSERT INTO public.star VALUES ('Sagittarius', 'some text', 1256, 20, 9, 1);
INSERT INTO public.star VALUES ('Cassiopeia', 'some text', 908, 12, 10, 1);
INSERT INTO public.star VALUES ('Cygnus', 'some text', 678, 34, 11, 2);
INSERT INTO public.star VALUES ('Ursa Major', 'some text', 76, 23, 12, 4);
INSERT INTO public.star VALUES ('Orion', 'some text', 764, 67, 13, 7);
INSERT INTO public.star VALUES ('Aquila', 'some text', 876, 13, 14, 5);
INSERT INTO public.star VALUES ('Special Star', 'special text', 2432, 132, 15, 6);


--
-- Name: black_hole_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.black_hole_id_seq', 8, true);


--
-- Name: galaxy_galaxy_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.galaxy_galaxy_id_seq', 7, true);


--
-- Name: moon_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.moon_id_seq', 28, true);


--
-- Name: planet_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.planet_id_seq', 15, true);


--
-- Name: star_star_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.star_star_id_seq', 15, true);


--
-- Name: black_hole black_hole_name_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.black_hole
    ADD CONSTRAINT black_hole_name_key UNIQUE (name);


--
-- Name: black_hole black_hole_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.black_hole
    ADD CONSTRAINT black_hole_pkey PRIMARY KEY (black_hole_id);


--
-- Name: galaxy galaxy_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.galaxy
    ADD CONSTRAINT galaxy_pkey PRIMARY KEY (galaxy_id);


--
-- Name: moon moon_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.moon
    ADD CONSTRAINT moon_pkey PRIMARY KEY (moon_id);


--
-- Name: planet planet_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.planet
    ADD CONSTRAINT planet_pkey PRIMARY KEY (planet_id);


--
-- Name: star star_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.star
    ADD CONSTRAINT star_pkey PRIMARY KEY (star_id);


--
-- Name: galaxy unique_galaxy_id; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.galaxy
    ADD CONSTRAINT unique_galaxy_id UNIQUE (galaxy_id);


--
-- Name: moon unique_moon_id; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.moon
    ADD CONSTRAINT unique_moon_id UNIQUE (moon_id);


--
-- Name: planet unique_planet_id; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.planet
    ADD CONSTRAINT unique_planet_id UNIQUE (planet_id);


--
-- Name: star unique_star_id; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.star
    ADD CONSTRAINT unique_star_id UNIQUE (star_id);


--
-- Name: black_hole blackhole_to_galaxy; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.black_hole
    ADD CONSTRAINT blackhole_to_galaxy FOREIGN KEY (galaxy_id) REFERENCES public.galaxy(galaxy_id);


--
-- Name: moon moon_to_planet; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.moon
    ADD CONSTRAINT moon_to_planet FOREIGN KEY (planet_id) REFERENCES public.planet(planet_id);


--
-- Name: planet planet_to_star; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.planet
    ADD CONSTRAINT planet_to_star FOREIGN KEY (star_id) REFERENCES public.star(star_id);


--
-- Name: star star_to_galaxy; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.star
    ADD CONSTRAINT star_to_galaxy FOREIGN KEY (galaxy_id) REFERENCES public.galaxy(galaxy_id);


--
-- PostgreSQL database dump complete
--

