import React, { useState } from 'react';


const useInstaAi = ({ mood, location, captionTopic, hashtagText, reelDescription, bioText, nameTopic, userName }) => {

  const [caption, setCaption] = useState([]);
  const [hashtags, setHashtags] = useState([]);
  const [name, setName] = useState([]);
  const [bio, setBio] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState(null);

  // Direct Puter.js call instead of backend
  const fetchData = async (prompt) => {

    setErrors(null);
    try {
      const res = await puter.ai.chat(prompt);
      let output = res.message.content;

      // Split into array by line breaks
      let parsed = output
        .includes('|||')
        ? output.split('|||')
        : output.split('||')   // fallback if triple pipes are missing
          .map(s => s.trim())
          .filter(s => s.length > 0);

      return parsed;
    } catch (error) {

      setErrors(error);
    }

  };


  const handleGenerate = async (selected) => {
    setLoading(true);

    let prompt = "";

    if (selected === "captions") {
      prompt = `
You are an expert Instagram caption writer.
Write exactly 5 viral-worthy Instagram captions for a post about "${captionTopic}".
Mood: ${mood}.
${location ? `Subtly weave in references to ${location} where natural.` : ""}

Formatting Rules:
- Output ONLY the captions.
- Do not number or bullet them.
- Separate each caption using three vertical bars (|||).
- Do NOT use commas inside captions. If a pause is needed, replace with em dash (—), ellipsis (…) or other natural punctuation.
- Keep captions short, catchy, and optimized to make a reel rank on Instagram Explore.
- Use trending slang, emojis, and subtle CTAs for engagement.
`;

      const data = await fetchData(prompt);
      setCaption(data);
    }

    else if (selected === "hashtags") {
      prompt = `
You are an elite social media strategist and Instagram growth expert.
Generate exactly 15 high-ranking Instagram hashtags for a reel.
Reel description: "${reelDescription}".
Main topic: "${hashtagText}".
Mood: ${mood}.
${location ? `Make them location-aware for ${location}.` : ""}

Formatting Rules:
- Output ONLY the hashtags.
- Do NOT number or bullet them.
- Separate each hashtag using commas.
- Each hashtag should be optimized for Instagram reach: a mix of niche, trending, and broad hashtags (small-medium-large reach strategy).
- Keep hashtags short, catchy, and relevant to the reel content and mood.
- Use natural spacing, capitalization, or symbols if it boosts discoverability, but do not add extra text.
`;
      const data = await fetchData(prompt);
      setHashtags(data);
    }

    else if (selected === "bio") {
      prompt = `
You are a top-tier Instagram bio expert and social media growth strategist.
Write exactly 5 unique Instagram bio options for someone who wants to express:
"${bioText}".
Mood: ${mood}.
${location ? `The person is based in ${location}.` : ""}

Formatting Rules:
- Output ONLY the bios, no numbering, bullets, or extra text.
- Separate each bio using THREE vertical bars exactly (|||).
- Each bio must be under 150 characters.
- Make them highly relevant to the person, reflecting their interests, hobbies, passions, or lifestyle.
- Include clever phrasing, puns, and trendy references.
- Use emojis naturally to enhance meaning and personality.
- Each bio should feel fun, personal, and engaging — it should hook someone instantly and make them want to follow.
- Make the bios lively, authentic, memorable, and perfectly formatted for Instagram.
`;




      const data = await fetchData(prompt);
      setBio(data);
    }

    else if (selected === "name") {
      prompt = `
You are a top-tier brand strategist and Instagram growth expert.
Suggest exactly 10 highly creative, short, and memorable Instagram usernames.
Topic/Niche: "${nameTopic}".
${userName ? `Incorporate the real name "${userName}" creatively wherever possible.` : ""}
Mood: ${mood}.
${location ? `Make some usernames resonate with people from ${location}.` : ""}

Formatting Rules:
- Output ONLY the usernames, no numbering, bullets, or extra text.
- Separate each username using THREE vertical bars exactly (|||).
- Each username must be short, catchy, aesthetic, and easy to remember.
- Include trendy, clever, and fun variations.
- Make sure the usernames feel personal and fit the mood, topic, and style.
- Avoid spaces; use underscores (_) or dots (.) if needed.
- Max 20 characters per username.
`;

      const data = await fetchData(prompt);
      setName(data);
    }

    else {
      console.log("invalid choice");
    }
    setLoading(false);


  };

  return { handleGenerate, caption, hashtags, bio, name, loading, errors,setErrors };

};

export default useInstaAi;
